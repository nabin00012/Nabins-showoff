import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="container py-10">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">LocalMarketplace</h1>
        <p className="text-muted-foreground mb-6">
          Posted on {new Date().toLocaleDateString()}
        </p>

        <div className="rounded-lg overflow-hidden mb-8 relative h-[400px]">
          <Image
            src="/local.png"
            alt="LocalMarketplace project"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">
            Today I completed building a fully functional local marketplace. It
            serves people within the same pincode. It encourages local market
            growth and community connections.
          </p>

          <p>
            The platform allows local vendors to list their products and
            services, while customers can browse and purchase items from
            businesses in their immediate vicinity. This not only supports local
            economies but also reduces delivery times and environmental impact.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pincode-based search and filtering</li>
            <li>Real-time inventory management</li>
            <li>Secure payment processing</li>
            <li>Vendor and customer profiles</li>
            <li>Review and rating system</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Technologies Used</h2>
          <p>
            This project was built using Next.js for the frontend, Node.js for
            the backend, and MongoDB for the database. I also implemented
            real-time features using Socket.io and integrated payment processing
            with Stripe.
          </p>
        </div>
      </div>
    </div>
  );
}
