import { BsBriefcase, BsLightningCharge, BsPeople, BsTools } from "react-icons/bs";
import { PricingType, StatisticType, TestimonialType } from "./types";
import avatarPlaceholder from '@/assets/images/avatar/placeholder.jpg';

export const partners = [
    { icon: BsTools },
    { icon: BsBriefcase },
    { icon: BsPeople },
    { icon: BsLightningCharge },
]

export const statData: StatisticType[] = [
    {
        title: "Registered Workers",
        stat: 12500,
        suffix: "+"
    },
    {
        title: "Tasks Completed",
        stat: 50,
        suffix: "K+"
    },
    {
        title: "Cities Covered",
        stat: 120,
        suffix: "+"
    },
    {
        title: "Service Categories",
        stat: 25,
        suffix: "+"
    }
]

export const pricingData: PricingType[] = []

export const testimonials: TestimonialType[] = [
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Ade",
            lastName: "Olawale",
        },
        comment: "I found an amazing plumber within minutes. Pickwork is a lifesaver for busy professionals!",
        rating: 5,
    },
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Grace",
            lastName: "Chidi",
        },
        comment: "As an electrician, Pickwork has doubled my monthly income. The verification process gives my clients peace of mind.",
        rating: 5,
    },
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Sani",
            lastName: "Abubakar",
        },
        comment: "I used Pickwork for domestic help and the experience was seamless. Highly recommended!",
        rating: 4.5,
    },
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Tunde",
            lastName: "Bakare",
        },
        comment: "Excellent platform. The delivery workers are timely and very polite.",
        rating: 5,
    },
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Emeka",
            lastName: "Ibe",
        },
        comment: "The easiest way to hire skilled workers. Verified profiles and reviews make it trustworthy.",
        rating: 5,
    },
    {
        user: {
            avatar: avatarPlaceholder,
            firstName: "Aisha",
            lastName: "Bello",
        },
        comment: "I register as a worker part-time for errands and it has been great. Extra income made easy!",
        rating: 5,
    }
]