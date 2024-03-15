import React, { useState } from "react";
import { Box, Button, Flex, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const slides = ["https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzEwNDcyNTcyfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3MTA0NzI1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1460627390041-532a28402358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldHxlbnwwfHx8fDE3MTA0NzI1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080"];

  const slidesCount = slides.length;

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const handleTransitionEnd = () => {
    if (slideDirection === "right" && currentSlide === 0) {
      setCurrentSlide(slidesCount - 1);
    } else if (slideDirection === "left" && currentSlide === slidesCount - 1) {
      setCurrentSlide(0);
    }
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
    direction: slideDirection === "right" ? "normal" : "reverse",
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const ArrowLeft = () => <IconButton aria-label="arrow-left" icon={<FaChevronLeft />} left="0" {...arrowStyles} onClick={prevSlide} />;

  const ArrowRight = () => <IconButton aria-label="arrow-right" icon={<FaChevronRight />} right="0" {...arrowStyles} onClick={nextSlide} />;

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle} onTransitionEnd={handleTransitionEnd}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image src={slide} alt="carousel image" boxSize="full" backgroundSize="cover" />
            </Box>
          ))}
        </Flex>
        <ArrowLeft />
        <ArrowRight />
      </Flex>
    </Flex>
  );
};

const Index = () => {
  return (
    <Box>
      <Slider />
    </Box>
  );
};

export default Index;
