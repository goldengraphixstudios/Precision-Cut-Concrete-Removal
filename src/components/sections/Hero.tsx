"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Badge from "@/components/ui/Badge";
import ConcreteTexture from "@/components/svg/ConcreteTexture";
import PhoneWave from "@/components/svg/PhoneWave";
import HeroMedia from "@/components/sections/HeroMedia";
import { business } from "@/lib/data";

const particles = [
  { size: 6, top: "18%", left: "12%", delay: 0 },
  { size: 4, top: "28%", left: "70%", delay: 0.4 },
  { size: 5, top: "62%", left: "22%", delay: 0.2 },
  { size: 3, top: "72%", left: "82%", delay: 0.6 },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-concrete-white pb-12 pt-6 sm:pt-8">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={
            reduceMotion
              ? { x: 0, y: 0 }
              : { x: [0, -10, 0], y: [0, 8, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConcreteTexture className="h-full w-full text-steel" />
        </motion.div>
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-steel/10"
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
            }}
            animate={
              reduceMotion
                ? { opacity: 0.4 }
                : { y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <Badge>Free Estimates</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-[0.15em] text-shadow sm:text-5xl lg:text-6xl">
              CONCRETE CUTTING
              <br />
              BREAKING
              <br />
              HAULING
            </h1>
            <p className="max-w-xl text-base text-steel/70 sm:text-lg">
              Clean cuts. Fast removal. Haul-away included.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href={business.phoneHref} size="lg">
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <motion.span
                    className="absolute inset-0 rounded-full border border-safety/60"
                    animate={
                      reduceMotion
                        ? { scale: 1, opacity: 0 }
                        : { scale: [1, 1.6], opacity: [0.7, 0] }
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <PhoneWave className="h-5 w-5" aria-hidden="true" />
                </span>
                Call/Text {business.phone}
              </ButtonLink>
              <ButtonLink href="#estimate" variant="secondary" size="lg">
                Get Free Estimate
              </ButtonLink>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
              <span>Fast response</span>
              <span>Clean cuts</span>
              <span>Jobsite respect</span>
            </div>
          </div>
          <HeroMedia />
        </div>
      </Container>
    </section>
  );
}
