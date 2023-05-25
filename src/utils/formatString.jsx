export const formatAnalogy = (string) => {
  const delimiterIndex = string.indexOf(":");
  const firstPart = string.substring(0, delimiterIndex);
  const remainingPart = string.substring(delimiterIndex + 1);
  return (
    <span>
      <span className="font-size-16 font-semibold">{firstPart}</span>:
      <span>{remainingPart}</span>
    </span>
  );
};
