
import { useEffect, useState } from "react";
import {
  UserRound,
  Mail,
  CalendarDays,
  Activity,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  LogOut,
  Sparkles,
} from "lucide-react";
import api from "../services/api";

function Profile() {
  const [user, setUser] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchProfile();
    fetchStats();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile");
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.get("/speech/stats");
      setStats(res.data.data || res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const statistics = [
    {
      label: "Total Predictions",
      value: stats.total || 0,
      icon: Activity,
      color: "text-purple-700",
      bg: "bg-purple-100",
    },
    {
      label: "Normal",
      value: stats.normal || 0,
      icon: ShieldCheck,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
    {
      label: "Toxic",
      value: stats.toxic || 0,
      icon: ShieldAlert,
      color: "text-red-700",
      bg: "bg-red-50",
    },
    {
      label: "Offensive",
      value: stats.offensive || 0,
      icon: AlertTriangle,
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
    {
      label: "Threat",
      value: stats.threat || 0,
      icon: ShieldAlert,
      color: "text-orange-700",
      bg: "bg-orange-50",
    },
    {
      label: "Hate Speech",
      value: stats.hateSpeech || 0,
      icon: ShieldAlert,
      color: "text-rose-700",
      bg: "bg-rose-50",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9FF] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">

        {/* Page Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-3 py-1.5 text-xs font-semibold text-purple-700">
            <Sparkles size={14} />
            YOUR ACCOUNT
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Manage your account details and review your AI analysis activity.
          </p>
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm">
          {/* Purple Banner */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 sm:h-40">
            <div className="absolute -right-8 -top-20 h-56 w-56 rounded-full border-[30px] border-white/10" />
            <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute left-6 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:left-8">
              <ShieldCheck size={14} />
              HateShield AI Account
            </div>
          </div>

          {/* User Details */}
          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-purple-100 to-violet-200 text-4xl font-extrabold text-purple-700 shadow-md sm:h-28 sm:w-28 sm:text-5xl">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Account Profile
              </span>
            </div>

            <div className="mt-5">
              <h2 className="break-words text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {user.name || "User"}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500">
                {user.email || "Email not available"}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-[#FAF9FF] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <UserRound size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500">
                    Full Name
                  </p>
                  <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                    {user.name || "-"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-[#FAF9FF] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500">
                    Email Address
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                    {user.email || "-"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-[#FAF9FF] p-4 sm:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <CalendarDays size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Member Since
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Your Statistics
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              A summary of your prediction activity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100/70"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <p className="mt-3 text-3xl font-extrabold text-gray-900">
                        {item.value}
                      </p>
                    </div>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Logout */}
        <section className="mt-8 flex flex-col gap-4 rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-bold text-gray-900">
              Sign out of your account
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              You can log in again whenever you want to use the platform.
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100"
          >
            <LogOut size={18} />
            Logout
          </button>
        </section>

      </div>
    </main>
  );
}

export default Profile;
