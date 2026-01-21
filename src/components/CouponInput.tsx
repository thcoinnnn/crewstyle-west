import { useState } from 'react';
import { useCoupons } from '@/hooks/useCoupons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tag, X, Check, Loader2 } from 'lucide-react';

interface CouponInputProps {
  cartTotal: number;
  onCouponApplied?: (discount: number) => void;
  onCouponRemoved?: () => void;
}

const CouponInput = ({ cartTotal, onCouponApplied, onCouponRemoved }: CouponInputProps) => {
  const [code, setCode] = useState('');
  const { loading, error, appliedCoupon, validateCoupon, removeCoupon } = useCoupons();

  const handleApply = async () => {
    if (!code.trim()) return;
    
    const coupon = await validateCoupon(code, cartTotal);
    if (coupon) {
      onCouponApplied?.(coupon.calculatedDiscount);
      setCode('');
    }
  };

  const handleRemove = () => {
    removeCoupon();
    onCouponRemoved?.();
  };

  if (appliedCoupon) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <div>
              <p className="font-medium text-sm">{appliedCoupon.code}</p>
              <p className="text-xs text-muted-foreground">{appliedCoupon.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-primary">
              -R$ {appliedCoupon.calculatedDiscount.toFixed(2)}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleRemove}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Código do cupom"
            className="pl-9 bg-secondary/50"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleApply();
              }
            }}
          />
        </div>
        <Button
          onClick={handleApply}
          disabled={loading || !code.trim()}
          variant="outline"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            'Aplicar'
          )}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      <p className="text-xs text-muted-foreground">
        Cupons disponíveis: CREW10, CREW20, FRETE50, WESTCOAST
      </p>
    </div>
  );
};

export default CouponInput;
