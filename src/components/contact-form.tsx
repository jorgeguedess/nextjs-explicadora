"use client";

import InputMask from "react-input-mask";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input, inputClass } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { phoneRegex } from "@/constants/regex";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { ContactProps } from "@/interfaces/contact";
import axios from "axios";
import { useState } from "react";
const normalize = (text: string) => text.replaceAll("\r\n", "\n");

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é requerido*")
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(20, "Assunto muito longo"),
  email: z
    .string()
    .min(1, "Email é requerido")
    .email("Deve ser um e-mail válido*"),
  phone: z.string().regex(phoneRegex, "Forneça um número de telefone válido"),
  message: z
    .string()
    .min(1, "Mensagem é requerida*")
    .max(160, "Mensagem muito longa")
    .transform(normalize),
});

type SignUpSchemaType = z.infer<typeof formSchema>;

const initialValues: ContactProps = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (values) => {
    try {
      setLoading(true);
      const response = axios.post("/api/send", values);
      const data = (await response).data;
      alert("Email enviado com sucesso!");
      return data;
    } catch (error: any) {
      alert("Erro no envio de email!");
      console.error(error);
    } finally {
      form.reset();
      setLoading(false);
    }
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
          <div className="flex flex-wrap gap-4 *:min-w-32 *:flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputMask
                      className={inputClass}
                      placeholder="Telefone*"
                      mask="(99) 99999-9999"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Sua mensagem*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <div role="status" className="flex items-center gap-4">
                <span>Enviando...</span>
                <svg
                  aria-hidden="true"
                  className="size-4 animate-spin fill-primary text-secondary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <span>Enviar</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
