import hydrator from "../assets/hydrator.jfif"
import monitor from "../assets/monitor.jfif"
import keyboard from "../assets/keyboard.jfif"

export const BEST_SELLERS = [
  {
    id: "bs-1",
    brand: "KeyCraft",
    title: "Precision Aluminum Keyboard",
    price: 179,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 430,
    salesTag: "🔥 1.8k+ sold this week",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3KKuUItGoN2zU4qtDaQVKNelyYO0dCJ_rHK9JIylL3W6nw_uW85SyhdtifWFdw6i-Her2ookpiM9y0JogxBGbv4suVOWaYU_6J0V6vHLTU8Lxn_vuS2esIga_WF5y3ta6rrgTj_FRC-2ndUeddoZ-a6t39beVLn7m4Ahb7NUg0_wKuD9SeaHiLZvuQqpr3hS8X3dwCjI0-eM5orT4CxVD-wAVCT_gaVtk6iFR6E4eo2qZrAmDM116",
  },
  {
    id: "bs-2",
    brand: "Kanso",
    title: "Aerolite Ceramic Kettle",
    price: 89,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 128,
    salesTag: "🔥 1.4k+ sold this week",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKXxGpiuRwjXFScwoBkEcedx5XnMIe9jg031E5TRPmIBjrtxnXfKu67zhbMharLrHLlrVhlHZ71W5X3MZE0n58-S7glKewHVPJinLIDrFUNzm6RFEg9W5Ay5mobnYm1X-bKmkRyVv-jRp3LLU6GKDSaqp2ueNV7-WkYXK--UKJoqiIbSGuvmM87B8qPJZrO3l7XQXIvVocdnBbLsBYFi69GWkoZ3jDna2ac6KSWIAJEdQ37ociS_SU",
  },
  {
    id: "bs-3",
    brand: "Lumixel",
    title: 'Horizon 4K OLED Monitor 27"',
    price: 580,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 512,
    salesTag: "🔥 920+ sold this week",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8wDdxIDHwbWe1BDax8itV6x3un5nVguYxwcpDKmIg5JaVm4E2ItVp-_ozCrmWzxDR2BQoPIl5db1keqwXRnaxfWH4118BqCxym2WR-ZPx9Q5h78_MKmAOFhW3xNrJe9EPJchaHG7sl6C1_lv_P4te5d73WCvvpkoILMeh1qeknMq_SL8N0CgFV5PuFc4H5TzUFSOgFzMz4JB0YjoFKtyNrCBT9SBLTn34UJ41jrNq6rwpgq8NOC6j",
  },
  {
    id: "bs-4",
    brand: "Vanguard",
    title: 'Nomad Leather Laptop Sleeve 14"',
    price: 68,
    originalPrice: 85,
    rating: 4.7,
    reviewsCount: 94,
    salesTag: "🔥 1.2k+ sold this week",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVc0ZFilOqqUQX1TxH1yYJ_HEi0rE8FyLuNWPNYiHz6k0yb4BbybwLzw29oAXCV88fdgOWa0WwoagdaeHEvGaVv_2_AmeBGytMfXyfTxnqrmDuVKEh3JD5Tj73ps45BD4tlRjnqioMY8Yv7L35hpVvdHdvMxPIB-nULIfWyzPEAlzJ4_ILJbjt4IZkQvyyXgdSxEqHEmNNfbOKopRTmoVBdX7FE2V5qUa_cjyz1XV0QZuHHhrMF5jq",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: "fp-1",
    category: "Tech",
    brand: "AuraSound",
    title: "Studio One ANC Wireless Headphones",
    price: 249,
    originalPrice: 299,
    discountBadge: "17% OFF",
    stockStatus: "In Stock",
    rating: 4.8,
    reviewsCount: 342,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7qnagkSHI1xqXMeTE3spxrOXx0T_nt5pxuxQUO-WDQ5WvdpecKluEO0O_rJbLq5zH-3qept0S7O_9C8Q1cU-2wDPOwjtiW2oTu86tr9bMUofHLaZZPb_xjiZ1dLZoJahhqSUvnGcHpY9iilnXFXEeK2eL2HGvinaUT5cGJlfR8IwZ-9yTqfTHWuAaIrxciQ5IRP1AiRSNbwdgJ7gkoNhsvx7SVIuYz2-9tDMTxBzqZkYSePd4Ngh_",
  },
  {
    id: "fp-2",
    category: "Lifestyle",
    brand: "Kanso",
    title: "Aerolite Ceramic Minimalist Kettle",
    price: 89,
    originalPrice: null,
    discountBadge: null,
    stockStatus: "In Stock",
    rating: 4.9,
    reviewsCount: 128,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBABC3lpPR4GHPhPKbBAtg5NfmG086NRx_C6_wSCYr4DMiOn1IQE1G7MMCEkwLnoaOPI5IV8rVuXaeA6KW_nHG1ov5nmMmi_ZexV8_wgmEIANL1FloZ--lxT49ZQJF_BfBMExyvKCDC1F6oc9GCmIddTaTjyd_Sv00xX3iSKkt1eff2EKONoMDBtPv3ESKlXKwqXUoq2isQ3z1ps5dRKFvQ8e3ZjBNqburvb02n2De5V2iBW3KYia-a",
  },
  {
    id: "fp-3",
    category: "Lifestyle",
    brand: "Vanguard",
    title: 'Nomad Leather Laptop Sleeve 14"',
    price: 68,
    originalPrice: 85,
    discountBadge: "20% OFF",
    stockStatus: "In Stock",
    rating: 4.7,
    reviewsCount: 94,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2b4VrayMuc77ta9W8gTnyE16PIaj76V6sF56fO9WipQb-LZhdW2OjvAc6tj--Pgw064Yi-pEuC7aRPDXIhvuOQ_bFf0XmkGPoe5SaTzxywtc6lRURhi5t6JVIuPPLKloGcQk17DkBpkQ4Uhu1es7TMOrPPMUrMh4UWpqCsJXYb_eoPm5dGWrf8KrN1IVFjEQHi9yHHapzUcE8BYg0LFAGKJi_9i_u9ihyP8DT_ie_73F98mvy2R56",
  },
  {
    id: "fp-4",
    category: "Apparel",
    brand: "Forma",
    title: "Ultra-Fine Merino Wool Overshirt",
    price: 145,
    originalPrice: null,
    discountBadge: null,
    stockStatus: "Low Stock",
    rating: 4.6,
    reviewsCount: 56,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK99dGyWisTYjysPxg9hUYE0KTtc-uWRAEGvxI2cOI9ZbAQiAEow4k_HXBI2JPMZOR9-v51ORj8uqLdZTYo32z5NW-9009mDYv1I73znveVWY8LZDi-uaaSngoYkS47iWqB2BlWg28Jr9PJaKqWNJFLWm2LNkOOROHqWqbcJwRn6AA7ORxXWwDB5xdmpJDhvh17tSI9kyX9QGhNlDzCd8WeB0TpZ4uaXczGp1WheHFATn3VC-KyevQ",
  },
  {
    id: "fp-5",
    category: "Tech",
    brand: "Lumixel",
    title: 'Horizon 4K OLED Smart Monitor 27"',
    price: 580,
    originalPrice: 699,
    discountBadge: "17% OFF",
    stockStatus: "In Stock",
    rating: 4.9,
    reviewsCount: 512,
    image:
      monitor,
  },
  {
    id: "fp-6",
    category: "Lifestyle",
    brand: "Verde Lab",
    title: "Botanical Daily Face Hydrator 100ml",
    price: 42,
    originalPrice: null,
    discountBadge: null,
    stockStatus: "In Stock",
    rating: 4.8,
    reviewsCount: 215,
    image:
      hydrator,
  },
  {
    id: "fp-7",
    category: "Tech",
    brand: "KeyCraft",
    title: "Precision Aluminum Mechanical Keyboard",
    price: 179,
    originalPrice: null,
    discountBadge: null,
    stockStatus: "In Stock",
    rating: 4.9,
    reviewsCount: 430,
    image:
      keyboard,
  },
  {
    id: "fp-8",
    category: "Lifestyle",
    brand: "HydroPure",
    title: "Vessel Ergonomic Stainless Tumbler",
    price: 38,
    originalPrice: 48,
    discountBadge: "20% OFF",
    stockStatus: "In Stock",
    rating: 4.5,
    reviewsCount: 88,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWINBtsgS_ddVzWZKTM0NvIiE1iB5k3a5JPBH-2U6R8sI8CyF7fgdPi639oynTjgCzY176a25NqUXg4FEWl6Q-dfFcw89hIwMroNRUIaj2suzdJy0x6g04ACl6OnQeLEfmnZQtESjGqtuigWgq5_wbQCgjK6RlDVFzavpfeJeh4_XE6D1pcUAHkZ_uPuala59B5zkPwx6QONJIMZ3CmRfezEVD7052NbJZgwBJf1MIHlFReDqH0wt7",
  },
];

export const CATEGORIES = [
  {
    title: "Electronics",
    count: "140+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBosIl29gsjHmncl_hBc-ZHXvauYIcUhMKk3G8dKDXj6oXUVgOvVlWXeI-M8K5ORqnzb8d5yz3mICtDapLWRa_W9q73Q5hfd7EwLyXbcKi5L7yv-PVDBnHk4I2970efWgdc8J6McaIz7lzH-obGijbippSYjDplpoKq7TsIFVLKuIfKsOSD6_lomNeZl6WAMrsJg0Y70Q8CHBxd1BGAwyV0--FijWSMI6UnOX4s4J88rY4kGFkWTRut",
    filterKey: "Tech",
  },
  {
    title: "Fashion & Apparel",
    count: "320+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMmZ_2sFaAqQnizyrK8tFymJi_iymkZGr9xfEsfDartDjXL1KkVv7iwUlxOFpiUYbbezjd7Ub95ctHbTG__j0C55Of-42x9zJv7uImpHC7A04XRG6y9feB1FIpPFDMYkHfd7Fcv9TdvmP1Jqc7ogAIH8xW9QpJAQsQ6P8cPti60cHiYDT9DJdujIOLjvVGCr869fMl868kz-C8h0V1Hbbc0UsajHMGrQ50wxX9iiXWUgfN4d8z3aiK",
    filterKey: "Apparel",
  },
  {
    title: "Beauty & Care",
    count: "95 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFVMGO88wlAmPnzl9BFtizk0SF_3gMrij5vr0Ul9M4gzvw9Gw5dxzZBXnM4st3LGRkhK44GVutKkF1LSwpghcLK4f2oVeg9geekl5W9YC8M_uDAlmtE6hybmXza0yu4aTimKQqWA7fPzGrxeJE6Gm6g3zg_TK08tsEugAbUFdEzTBQT_T3JS6UZdhh3cE6hK1gHMelsIiYb71WGc4ITW2uZjxzSs56VpzieXVcNtbs40BXQzdQnlAs",
    filterKey: "Lifestyle",
  },
  {
    title: "Home & Living",
    count: "210+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd9ZahxjYdYoK0jLqhPTGyfTuXTRXXRnTCILA1O0c83OBtSQMI0SC-NWxlMtHA5DKvJ-iS8F7bmcaClD2nQxETbFhCiT6HcwxWcEtQoXGYm3txEhS2U-dHPN0_vjUUecu-02TfFC427ZS6tB2pTiAFe_CHCG5vBcy5U2ueyaRMojLVA9sA4j1BlGVQQ0j-9kv-HdBfHQ8nLo2MJky131y69qJCg5DtFDAzYtTivNXPKYlaQuTzuzmk",
    filterKey: "Lifestyle",
  },
  {
    title: "Sports & Fitness",
    count: "85 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBynwNhbCj2nnCegoAWMTayXiqeyM_wBZdUolNMW0kaGavnXu_IkuHc5LY9_U7drR40nltVOD6rZFkCchk6pGLUChnspEPmZChtVlFNsluxnJK6JB6GaBZghuRoEMpQmjiNK7znAFzLJvuZUfA6POmlA81BBC7GvXhfYn9q0k7cOmHQW-aSrxC-PZxKURt1jBmAZWPTyvFsRLLgFAqbvURTqCGfTALTgVFtpEXu2o1ozOMeP_oxr5I-",
    filterKey: "Lifestyle",
  },
  {
    title: "Accessories",
    count: "170 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUE7tXA2lNwMJtGWpbuTFsCdjtFlSb_jIW9rjnNx1ysnaOK9Vkzhe8myUnCsUZpaOn-fKP9840Z8_CRUU9PQ60EC0AAeoFPrk52UpfpQmb_UAwsJffPkDWFFA5LpvDNBOT3hxc0P6VN8Y-8Y3EtzYT9Nv9lswQKV-AW57QlqT4giiSG5j5w_iro85PTwR9Ob1Qf3Bw9gqXa1A7cQjEjmG6ZkZjmqdH_d2JcfmzX6X2FphnsrRcP18B",
    filterKey: "Lifestyle",
  },
];
