import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone"),
  preferredTime: z.string().min(1, "Required"),
});

export type BookingFormData = z.infer<typeof schema>;

export const BookingForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log("Booking form submitted", data);
    toast({ title: "Call booked", description: "We'll confirm your time shortly." });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
      </div>
      <div>
        <Label htmlFor="preferredTime">Preferred Time</Label>
        <Input id="preferredTime" placeholder="e.g., Weekdays 2–5pm" {...register("preferredTime")} aria-invalid={!!errors.preferredTime} />
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book a Call"}
      </Button>
      <p className="text-xs text-muted-foreground">No fluff. No pressure. If we can't help, we'll tell you straight.</p>
    </form>
  );
};
