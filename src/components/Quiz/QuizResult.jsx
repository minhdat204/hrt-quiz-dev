// src/components/Quiz/QuizResult.js
import React from 'react';
import { motion } from 'framer-motion';

const QuizResult = ({ finalPageData }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl md:text-4xl text-neutral font-bold mt-8">
                {finalPageData.headline}
            </h1>
            <p className="text-lg text-neutral-faded mt-4 max-w-xl">
                {finalPageData.message}
            </p>
            <button className="rounded-full capitalize bg-primary text-onprimary px-10 py-4 text-lg font-semibold mt-8 hover:bg-primary-highlighted transition">
                {finalPageData.ctaButton}
            </button>
        </motion.div>
    );
};

export default QuizResult;