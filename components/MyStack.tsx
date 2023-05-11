import { techStack } from "@lib/data";

const MyStack = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 px-6">
      {techStack.map((item, i) => (
        <div
          className="inline-flex items-center space-x-2 sm:space-x-3"
          key={i}
        >
          <span className="text-primary-light sm:text-lg">‣</span>
          <p className="font-mono text-xs font-medium text-white-dark sm:text-sm">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyStack;
