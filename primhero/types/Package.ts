export interface Package {
    id: number;
    trackingNumber: string;
    sender: string;
    recipient: string;
    status: string;
    deliveryDate: string;
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    origin: string;
    destination: string;
    estimatedDelivery: string;
    notes: string;
  }

 