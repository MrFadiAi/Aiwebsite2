"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9f147c03-7d84-47b6-801d-abc58e07a0f8");
  }, []);

  return null;
};
