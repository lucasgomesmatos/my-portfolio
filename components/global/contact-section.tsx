"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aqui você pode implementar a lógica de envio do formulário
    console.log("Dados do formulário:", values);
    // Reset do formulário
    form.reset();
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Entre em Contato</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Tem algum projeto em mente ou quer conversar sobre oportunidades?
          Ficarei feliz em ouvir de você!
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        {/* Formulário de contato */}
        <div className="p-6 rounded-lg border bg-card text-card-foreground">
          <h3 className="text-xl font-medium mb-4">Envie uma Mensagem</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="seu@email.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Sua mensagem..."
                        className="resize-vertical"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
