"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  const fieldVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.6,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 gap-8 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-4">Entre em Contato</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Tem algum projeto em mente ou quer conversar sobre oportunidades?
          Ficarei feliz em ouvir de você!
        </p>
      </motion.div>

      <motion.div className="w-full max-w-2xl mx-auto" variants={formVariants}>
        {/* Formulário de contato */}
        <motion.div
          className="p-6 rounded-lg border bg-card text-card-foreground"
          whileHover={{
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Envie uma Mensagem
          </motion.h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <motion.div
                custom={0}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input placeholder="Seu nome" {...field} />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Textarea
                            placeholder="Sua mensagem..."
                            className="resize-vertical"
                            rows={5}
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
