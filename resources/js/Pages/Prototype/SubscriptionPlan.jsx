import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubcriptionCard";


export default function SubscriptionPlan() {
    return <Authenticated>
        <div className="py-20 flex flex-col items-center">
            <div className="text-black font-semibold text-[26px] mb-3">
                Pricing for Everyone
            </div>
            <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                Invest your little money to get a whole new experiences from movies.
            </p>
            <div className="flex justify-center gap-10 mt-[70px]">
                <SubscriptionCard name="Basic" price={2900000} durationinMonth={3} features={["Unlock 10 basic movies", "Support 24/7 ready", "Up to 3 users"]} />

                <SubscriptionCard isPremium name="Premium" price={8900000} durationinMonth={6} features={["Unlock 200 awards movies", "Support 24/7 ready", "Up to 5 users"]} />

            </div>
        </div>
    </Authenticated>
}
