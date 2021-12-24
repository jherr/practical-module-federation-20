import { useState, useEffect } from "react";
import { Subject } from "rxjs";

import analyticsBus from "host/analytics";

const count = new Subject(0);

const useSubject = (subject, initialValue) => {
  const [value, valueSet] = useState(initialValue);

  useEffect(() => {
    const sub = subject.subscribe(valueSet);
    return () => {
      sub.unsubscribe();
    };
  }, [subject]);

  return [
    value,
    {
      // increment: () => count.next(value + 1),
      // clear: () => count.next(0),
      increment: () => {
        analyticsBus.next({ type: "addToCart", value: value + 1 });
        count.next(value + 1);
      },
      clear: () => {
        analyticsBus.next({ type: "onClear" });
        count.next(0);
      },
    },
  ];
};

export const useCount = () => useSubject(count, 0);
