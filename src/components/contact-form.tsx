"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { isEmailOrPhone } from "@/constants/regex";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
const normalize = (text: string) => text.replaceAll("\r\n", "\n");

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é requerido*")
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(20, "Assunto muito longo"),
  user: z
    .string()
    .min(1, "E-mail ou telefone é requerido*")
    .refine(isEmailOrPhone, {
      message: "Deve ser um e-mail ou um número de telefone válido*",
    }),
  subject: z
    .string()
    .min(1, "Assunto é requerido*")
    .max(160, "Assunto muito longo")
    .transform(normalize),
});

type SignUpSchemaType = z.infer<typeof formSchema>;

const initialValues = {
  name: "",
  subject: "",
  user: "",
};

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
    alert("Contato enviado com sucesso!");
    form.reset();
  };

  return (
    <div className="flex w-full max-w-[37.5rem] flex-col gap-8 rounded-[1.25rem] bg-background p-8 lg:w-[37.5rem]">
      <h5 className="font-title text-2xl font-semibold sm:text-3xl">
        Entre em Contato!
      </h5>
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email ou Telefone*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Assunto*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  );
};
