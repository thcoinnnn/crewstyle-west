import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { ArrowLeft, Send, MessageSquare, Package, Truck, CreditCard, RotateCcw, HelpCircle } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  subject: z.string().trim().min(5, 'Assunto deve ter pelo menos 5 caracteres').max(200),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000),
});

const faqItems = [
  {
    icon: Package,
    question: 'Como faço para acompanhar meu pedido?',
    answer: 'Após a confirmação do pagamento, você receberá um email com o código de rastreamento. Você pode acompanhar seu pedido diretamente no site dos Correios ou transportadora.',
  },
  {
    icon: Truck,
    question: 'Qual o prazo de entrega?',
    answer: 'O prazo de entrega varia de acordo com sua região. Para São Paulo capital, o prazo médio é de 2-5 dias úteis. Para outras regiões, pode variar de 5-15 dias úteis.',
  },
  {
    icon: CreditCard,
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos cartão de crédito (parcelamento em até 12x), cartão de débito, PIX e boleto bancário. Pagamentos via PIX e boleto têm 5% de desconto.',
  },
  {
    icon: RotateCcw,
    question: 'Como funciona a política de trocas e devoluções?',
    answer: 'Você tem até 30 dias após o recebimento para solicitar troca ou devolução. O produto deve estar em perfeito estado, com etiquetas e na embalagem original.',
  },
  {
    icon: HelpCircle,
    question: 'Os produtos são originais?',
    answer: 'Sim! Todos os nossos produtos são 100% originais e importados. Trabalhamos diretamente com fornecedores autorizados e garantimos a autenticidade de cada item.',
  },
  {
    icon: MessageSquare,
    question: 'Como usar cupons de desconto?',
    answer: 'Na página do carrinho, você encontrará um campo para inserir seu cupom. Digite o código e clique em "Aplicar". O desconto será calculado automaticamente no total.',
  },
];

const Support = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: user?.email || '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    const { error } = await supabase.from('support_tickets').insert({
      user_id: user?.id || null,
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (error) {
      toast.error('Erro ao enviar mensagem', {
        description: 'Tente novamente mais tarde',
      });
    } else {
      toast.success('Mensagem enviada!', {
        description: 'Responderemos em até 24 horas',
      });
      setForm({ name: '', email: user?.email || '', subject: '', message: '' });
    }

    setLoading(false);
  };

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-display font-bold text-gradient-gold">SUPORTE</h1>
            <p className="text-muted-foreground">Central de ajuda e atendimento</p>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              Perguntas Frequentes
            </CardTitle>
            <CardDescription>
              Encontre respostas para as dúvidas mais comuns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Fale Conosco
            </CardTitle>
            <CardDescription>
              Não encontrou sua resposta? Envie uma mensagem e responderemos em até 24h
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Seu nome"
                    className="bg-secondary/50"
                    required
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="bg-secondary/50"
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  placeholder="Qual o assunto da sua mensagem?"
                  className="bg-secondary/50"
                  required
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Descreva sua dúvida ou problema..."
                  className="bg-secondary/50 min-h-[150px]"
                  required
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>Ou entre em contato pelo WhatsApp:</p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            (11) 99999-9999
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
