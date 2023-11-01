import { motion } from "framer-motion";
import { useSelector } from "react-redux";

interface AnimationRenderProps {
  children: React.ReactNode;
}

function AnimationRender({ children }: AnimationRenderProps) {
  const { currentStep, previousStep } = useSelector((state: any) => state.step);

  return (
      <motion.div
        key={currentStep}
        className={`w-full ${currentStep == 0  ? "h-full": ""}`}
        transition={{ duration: 0.5 }}
        initial={
          currentStep > previousStep
            ? { opacity: 0, x: +1000 }
            : { opacity: 0, x: -1000 }
        }
        animate={{ opacity: 1, x: 0 }}
      >
        {children}
      </motion.div>
  );
}

export default AnimationRender;
