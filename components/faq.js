import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How quickly can I expect an AC installation after booking?",
    answer:
      "We aim for swift service, typically scheduling installations within [timeframe] after confirmation.",
  },
  {
    question: " What types of AC repairs do you handle?",
    answer:
      "Our skilled technicians address a range of issues, from cooling problems to component malfunctions, ensuring prompt fixes.",
  },
  {
    question: "Can I customize a maintenance plan to fit my specific schedule?",
    answer:
      "Absolutely! We offer flexible maintenance plans tailored to suit your convenience and ensure uninterrupted operation.",
  },
  {
    question: "How can an energy-efficiency assessment benefit my AC system?",
    answer:
      "Our assessment provides personalized recommendations to optimize efficiency, resulting in potential cost savings on your monthly energy bills.",
  },
];

export default Faq;
