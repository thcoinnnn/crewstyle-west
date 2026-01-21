import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discount_type: string;
  discount_value: number;
  min_purchase: number;
  is_active: boolean;
  expires_at: string | null;
}

export interface AppliedCoupon extends Coupon {
  calculatedDiscount: number;
}

export const useCoupons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);

  const validateCoupon = async (code: string, cartTotal: number): Promise<AppliedCoupon | null> => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('coupons')
        .select('*')
        .eq('code', code.toUpperCase())
        .eq('is_active', true)
        .maybeSingle();

      if (fetchError) {
        setError('Erro ao validar cupom');
        return null;
      }

      if (!data) {
        setError('Cupom inválido ou expirado');
        return null;
      }

      // Check expiration
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        setError('Este cupom expirou');
        return null;
      }

      // Check minimum purchase
      if (data.min_purchase && cartTotal < data.min_purchase) {
        setError(`Compra mínima de R$ ${data.min_purchase.toFixed(2)} para este cupom`);
        return null;
      }

      // Check max uses
      if (data.max_uses && data.current_uses >= data.max_uses) {
        setError('Este cupom atingiu o limite de usos');
        return null;
      }

      // Calculate discount
      let calculatedDiscount = 0;
      if (data.discount_type === 'percentage') {
        calculatedDiscount = (cartTotal * data.discount_value) / 100;
      } else {
        calculatedDiscount = Math.min(data.discount_value, cartTotal);
      }

      const applied: AppliedCoupon = {
        ...data,
        calculatedDiscount,
      };

      setAppliedCoupon(applied);
      return applied;
    } catch (err) {
      setError('Erro ao processar cupom');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setError(null);
  };

  return {
    loading,
    error,
    appliedCoupon,
    validateCoupon,
    removeCoupon,
  };
};
