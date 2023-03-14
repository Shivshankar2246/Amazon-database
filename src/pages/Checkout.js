import Header from "@/components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectQuantity, selectTotal } from "@/Slices/basketslice";
import CheckoutProducts from "@/components/CheckoutProducts";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";

const stripePromise = loadStripe(process.env.stripe_public_key);
function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { session } = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create checkout session

    const checkoutSession = await axios.post("/api/createCheckoutSession", {
      items: items,
      email: session && session.user ? session.user.email : "",
    });
    // Redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left section */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your basket is empty" : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProducts
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotals ({items.length})items:
                <span className="font-bold">
                  {" "}
                  <Currency quantity={total} />
                </span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                className="button mt-2"
              >
                Pay here
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
export default Checkout;
