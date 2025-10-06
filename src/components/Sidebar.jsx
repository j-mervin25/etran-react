import logo from "../assets/logo.svg";
import { ReactComponent as ProductivityIcon } from "../assets/productivity.svg";
import { ReactComponent as ExpenseIcon } from "../assets/expense.svg";
import { ReactComponent as TechnologyIcon } from "../assets/technology.svg";
import FeatureCard from "./FeatureCard";
export default function Sidebar() {
    return (
        <aside className="w-1/3 bg-[#394308] fixed top-0 left-0 bottom-0 p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                {/* Logo + Etran text */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Etran Logo" className="w-[15px] h-[15px]" />
                    <h1 className="font-bold text-white">Etran</h1>
                </div>

                {/* Get Started button */}
                <button className="bg-[#d2fd9c] text-green-900 px-4 py-1 rounded hover:bg-[#619111] transition">
                    Get Started
                </button>
            </div>

            <div className="mb-6">
                <h2 className="text-[42px] font-normal mb-2">
                    <span className="text-white">Money Transfers Made </span>
                    <span className="text-[#d2fd9c]">Simple</span>
                </h2>
                <p className="text-green-200 text-sm text-[#cbcbcb] mb-8">
                    No personal credit checks or founder guarantee.
                </p>

                <h3 className="text-[#d2fd9c] text-xs mb-3">Our Offerings</h3>
                <div className="flex flex-row gap-3">
                    <FeatureCard icon={ProductivityIcon} title="Instant Productivity" />
                    <FeatureCard icon={ExpenseIcon} title="Expense Management" />
                    <FeatureCard icon={TechnologyIcon} title="Advanced Technology" />
                </div>

                <div className="mt-10 flex gap-4 text-xs text-[#d2fd9c]">
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/social" className="hover:underline">Social</a>
                    <a href="/address" className="hover:underline">Address</a>
                    <a href="/legal" className="hover:underline">Legal Terms</a>
                </div>

            </div>

            {/* Empty space for now */}
            <div></div>
        </aside>
    );
}
