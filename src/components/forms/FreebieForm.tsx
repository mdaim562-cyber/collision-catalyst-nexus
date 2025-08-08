import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone"),
  shopName: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  zip: z.string().min(3, "Invalid zip"),
  revenueLastMonth: z.string().min(1, "Required"),
  estimatorsAndStaff: z.string().min(1, "Required"),
  desiredGoal: z.string().min(1, "Required"),
});

export type FreebieFormData = z.infer<typeof schema>;

export const FreebieForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FreebieFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FreebieFormData) => {
    console.log("Freebie form submitted", data);
    toast({ title: "Submitted", description: "We received your request. We'll reach out shortly." });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" autoComplete="given-name" {...register("firstName")} aria-invalid={!!errors.firstName} />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" autoComplete="family-name" {...register("lastName")} aria-invalid={!!errors.lastName} />
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
        <Label htmlFor="shopName">Shop Name</Label>
        <Input id="shopName" {...register("shopName")} aria-invalid={!!errors.shopName} />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input id="city" {...register("city")} aria-invalid={!!errors.city} />
      </div>
      <div>
        <Label htmlFor="zip">Zip Code</Label>
        <Input id="zip" {...register("zip")} aria-invalid={!!errors.zip} />
      </div>
      <div>
        <Label htmlFor="revenueLastMonth">Revenue Last Month</Label>
        <Input id="revenueLastMonth" {...register("revenueLastMonth")} aria-invalid={!!errors.revenueLastMonth} />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="estimatorsAndStaff">Number of Estimators & Staff</Label>
        <Input id="estimatorsAndStaff" {...register("estimatorsAndStaff")} aria-invalid={!!errors.estimatorsAndStaff} />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="desiredGoal">Desired Goal</Label>
        <Textarea id="desiredGoal" rows={3} {...register("desiredGoal")} aria-invalid={!!errors.desiredGoal} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Claim Your Free Visibility Boost"}
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">We only work with one shop per zip code - check availability now.</p>
      </div>
    </form>
  );
};
