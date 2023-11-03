import { useState } from 'react';

export default function useMeds(medicines) {
  const [meds, setMeds] = useState(medicines);
  return { meds, setMeds };
}
