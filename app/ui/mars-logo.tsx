
// components/Logo.js
import Image from 'next/image';

export default function MarsLogo() {
  return (
    <div>
      <Image
        src="/mars-logo-400.png"
        alt="MARS Performance Logo"
        width={400} // Adjust as needed
        height={400} // Adjust as needed
      />
    </div>
  );
}
