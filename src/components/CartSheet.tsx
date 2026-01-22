import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Plus, Minus, Trash2, X, MessageCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useCoupons } from '@/hooks/useCoupons';
import CouponInput from '@/components/CouponInput';
import { useState } from 'react';

const CartSheet = () => {
  const { items, itemCount, subtotal, discount, total, updateQuantity, removeItem, appliedCoupon, setAppliedCoupon, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleCouponApplied = (discountAmount: number) => {
    // The coupon is already applied via useCoupons, we just need to sync
  };

  const handleCheckoutWhatsApp = () => {
    const itemsList = items
      .map((item) => `• ${item.quantity}x ${item.product.name} (${item.product.color}) - ${formatPrice(item.product.price * item.quantity)}`)
      .join('\n');

    const couponText = appliedCoupon
      ? `\n🎟️ Cupom: ${appliedCoupon.code} (-${formatPrice(discount)})`
      : '';

    const message = encodeURIComponent(
      `🛒 *Pedido CrewStyle*\n\n${itemsList}\n\n💰 Subtotal: ${formatPrice(subtotal)}${couponText}\n✅ *Total: ${formatPrice(total)}*\n\nGostaria de finalizar meu pedido!`
    );

    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
          <ShoppingBag className="w-5 h-5 text-foreground" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl font-display tracking-wider">
            Carrinho ({itemCount})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Seu carrinho está vazio</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Adicione produtos para continuar
            </p>
            <SheetClose asChild>
              <Button variant="outline" className="btn-outline-gold">
                Continuar Comprando
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-secondary/30 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-2">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.product.color}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-secondary rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-secondary rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-display text-primary text-lg">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4 border-t border-border">
              {/* Coupon Input */}
              <CouponInputWrapper 
                cartTotal={subtotal} 
                onCouponChange={setAppliedCoupon}
                currentCoupon={appliedCoupon}
              />

              <Separator />

              {/* Summary */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Desconto ({appliedCoupon?.code})</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total</span>
                  <span className="text-primary font-display text-xl">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckoutWhatsApp}
                className="w-full btn-gold py-6 text-base gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar via WhatsApp
              </Button>

              <Button
                variant="ghost"
                onClick={clearCart}
                className="w-full text-muted-foreground hover:text-destructive"
              >
                Limpar Carrinho
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

// Wrapper component to handle coupon state sync with cart
const CouponInputWrapper = ({ 
  cartTotal, 
  onCouponChange,
  currentCoupon
}: { 
  cartTotal: number; 
  onCouponChange: (coupon: any) => void;
  currentCoupon: any;
}) => {
  const { loading, error, appliedCoupon, validateCoupon, removeCoupon } = useCoupons();
  const [code, setCode] = useState('');

  const handleApply = async () => {
    if (!code.trim()) return;
    const coupon = await validateCoupon(code, cartTotal);
    if (coupon) {
      onCouponChange(coupon);
      setCode('');
    }
  };

  const handleRemove = () => {
    removeCoupon();
    onCouponChange(null);
  };

  // If there's already a coupon applied in the cart, show it
  if (currentCoupon) {
    return (
      <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/30 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div>
            <p className="font-medium text-sm">{currentCoupon.code}</p>
            <p className="text-xs text-muted-foreground">{currentCoupon.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary">
            -{formatPrice(currentCoupon.calculatedDiscount)}
          </span>
          <button
            onClick={handleRemove}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Código do cupom"
          className="flex-1 px-3 py-2 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleApply();
          }}
        />
        <Button
          onClick={handleApply}
          disabled={loading || !code.trim()}
          variant="outline"
          size="sm"
        >
          Aplicar
        </Button>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
      <p className="text-xs text-muted-foreground">
        Cupons: CREW10, CREW20, FRETE50, WESTCOAST
      </p>
    </div>
  );
};

// Helper function for the wrapper
const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default CartSheet;
