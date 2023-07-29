import type { Metadata } from "next";

export interface ExtendedMetadata extends Metadata {
    canonical: {
      url: string;
    };
  }
  