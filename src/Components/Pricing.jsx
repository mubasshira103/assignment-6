import React from 'react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: [
      "Access to free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16  bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-10">
        Choose the plan that fits your needs.
      </p>

      <div className="grid  md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 text-left">
        {plans.map((plan, index) => (
          <div
            key={index}
             className={`relative rounded-xl p-6 shadow-md  ${
              plan.highlight
                ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white scale-105"
                : "bg-white"
            }`}
          >
            {plan.highlight && (
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-red-600 text-xs px-4 py-2 rounded-full shadow">
      Most Popular
    </span>
  )}

            <h3 className="text-xl font-semibold mt-3">
              {plan.name}
            </h3>
            <p className="text-sm mb-4">{plan.desc}</p>

            <div className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-sm font-normal"> /month</span>
            </div>

            <ul className="text-sm  flex-1 space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li  key={i}><span className="text-green-500 gap-5 mr-2">✔</span> {f}</li>

              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-full ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
