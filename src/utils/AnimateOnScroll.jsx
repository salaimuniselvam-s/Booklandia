/* eslint-disable react/prop-types */
import useElementOnScreen from "./useElementOnScreen";

const AnimateOnScroll = ({
  children,
  reappear = false,
  threshold = 0.1,
  fromRight,
}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-700 ${
          isVisible
            ? "opacity-100 blur-none translate-x-0"
            : `opacity-0 blur-lg ${
                fromRight ? "translate-x-20" : "-translate-x-20"
              }`
        } motion-reduce:transition-none motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateOnScroll;
