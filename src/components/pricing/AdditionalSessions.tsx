"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AdditionalSessions = () => {
  const [sessions, setSessions] = useState(1); // 1 = 1000 sessions, 10 = 10000 sessions

  const formatSessions = (value: number) => {
    return `${value},000`;
  };

  const calculatePrice = (value: number) => {
    return value * 140; // $140 per 1000 sessions
  };

  return (
    <>
      <style jsx>{`
        .slider {
          background: #e5e5e5 !important;
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .slider::-ms-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .slider::-webkit-slider-runnable-track {
          height: 8px;
          background: #e5e5e5;
          border-radius: 999px;
          border: 1px solid #b7b5b5;
        }
        .slider::-ms-fill-lower,
        .slider::-ms-fill-upper {
          background: #e5e5e5;
          border-radius: 999px;
          border: 1px solid #b7b5b5;
        }
        .slider::-moz-range-track {
          height: 8px;
          background: #e5e5e5;
          border-radius: 999px;
          border: 1px solid #b7b5b5;
        }
      `}</style>
      <section className="bg-bg-main-blue py-16 px-4">
        <div className=" max-w-[896px] p-4 sm:p-8 bg-white rounded-2xl mx-auto">
          <h4 className="text-2xl font-bold">
            Get Additional chatbot sessions as Add-On
          </h4>
          <div className="text-[#4B5563] my-5">
            Select the number of chatbot sessions{" "}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Chatbot Sessions Card */}
            <motion.div
              className="flex flex-col gap-4 p-4 sm:p-8 rounded-2xl bg-bg-main-blue w-full sm:min-w-[400px] "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
              }}
            >
              <span className="font-semibold text-lg text-nowrap">
                Chatbot Sessions
              </span>
              <div className="flex items-center gap-2 ">
                <span className="text-xl  font-bold text-primary-blue">
                  {formatSessions(sessions)} Sessions = $
                  {calculatePrice(sessions)} / Month
                </span>
              </div>

              {/* Slider */}
              <div className="w-full ">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={sessions}
                  onChange={(e) => setSessions(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                  style={{}}
                />
                <div className="flex justify-between text-sm text-[#6B7280] mt-2">
                  <span>1K</span>
                  <span>10K</span>
                </div>
              </div>
            </motion.div>

            {/* Shopify Integration Card */}
            <motion.div
              className="flex flex-col gap-2 p-4 sm:p-8 rounded-2xl bg-[#FFF7ED] w-full sm:min-w-[400px]"
              initial={{ opacity: 0, y: 60, borderColor: "#FFEDD5" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
                borderColor: "#FDBA74", // more saturated orange
              }}
            >
              <div className="flex items-center gap-4 ">
                <span className="font-semibold sm:lg text-nowrap">
                  Shopify Integration
                </span>
              </div>
              <span className="text-xl font-bold text-[#EA580C]">
                $4.99/month
              </span>
              <div className="text-[#4B5563] pb-12">
                Enhanced e-commerce features{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSessions;
