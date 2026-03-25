const SignalDivider = () => (
  <div className="relative w-full h-px my-0 overflow-hidden">
    <div className="absolute inset-0 signal-line" />
    <div className="absolute inset-0 signal-line animate-signal-sweep" />
  </div>
);

export default SignalDivider;
