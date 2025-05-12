"use client"
import { useState } from "react"
import { X } from "lucide-react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion"

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login")

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-b from-[#1a1333] to-[#0d0a1a] rounded-lg shadow-xl w-full max-w-2xl z-10 relative"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Welcome to RX100</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex mb-6">
                <button
                  className={`flex-1 py-2 text-center border-b-2 cursor-pointer ${activeTab === "login" ? "border-[#2a1f45] text-white" : "border-transparent text-gray-400"
                    }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 text-center border-b-2 cursor-pointer ${activeTab === "signup" ? "border-[#2a1f45] text-white" : "border-transparent text-gray-400"
                    }`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>

              {activeTab === "login" ? <LoginForm /> : <SignupForm />}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Form Values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
          placeholder="Enter your email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <a href="#" className="text-xs text-yellow-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
          placeholder="Enter your password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-[#2a1f45] hover:bg-[#3a2a5a] text-white cursor-pointer font-medium py-2 rounded transition-colors"
      >
        Login
      </button>

      <div className="mt-4 flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4 text-sm text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer bg-[#2a1f45] hover:bg-[#3a2a5a] text-white py-2 rounded transition-colors"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer bg-[#2a1f45] hover:bg-[#3a2a5a] text-white py-2 rounded transition-colors"
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          Facebook
        </button>
      </div>
    </form>
  );
}

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      city: "",
      address: "",
      phone: "",
      password: "",
      agree: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
      phone: Yup.string().required("Phone Number is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your first name"
            {...formik.getFieldProps("firstname")}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your last name"
            {...formik.getFieldProps("lastname")}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your city"
            {...formik.getFieldProps("city")}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your address"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Enter your phone number"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded text-white focus:outline-none focus:ring-0"
            placeholder="Create a password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 focus:ring-0 border-gray-500 rounded"
            {...formik.getFieldProps("agree")}
          />
          <span className="ml-2 text-sm text-gray-300">
            I agree to receive property alerts and promotional communications
          </span>
        </label>
        {formik.touched.agree && formik.errors.agree ? (
          <div className="text-red-500 text-sm">{formik.errors.agree}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-[#2a1f45] hover:bg-[#3a2a5a] text-white cursor-pointer font-medium py-2 rounded transition-colors"
      >
        Create Account
      </button>
    </form>
  );
}
