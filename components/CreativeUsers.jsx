"use client";

import React from "react";
import { Input } from "@heroui/input";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@heroui/react";
import { Button } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";
import { ScrollShadow } from "@heroui/react";
import { Card, CardBody } from "@heroui/react";
import { Divider } from "@heroui/react";
import Cards from "./Cards";
import { Textarea } from "@heroui/react";

export default function CreativeUsers() {
  const UpIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2048"
        height="2048"
        viewBox="0 0 2048 2048"
        {...props}
      >
        <path
          fill="currentColor"
          d="m1875 1037l-787-787v1798H960V250l-787 787l-90-90L1024 6l941 941z"
        />
      </svg>
    );
  };
  const AttachIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="currentColor"
          d="M2.283 7.975a.5.5 0 0 0 .854.354l4.595-4.597a2.5 2.5 0 1 1 3.536 3.536l-5.303 5.303a1 1 0 0 1-1.414-1.414l5.303-5.303a.5.5 0 0 0-.708-.708L3.843 10.45a2 2 0 1 0 2.828 2.828l5.303-5.303a3.5 3.5 0 1 0-4.95-4.95L2.43 7.621a.5.5 0 0 0-.146.354"
        />
      </svg>
    );
  };
  const VoiceIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            {...props}
          />
          <path
            fill="currentColor"
            d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"
          />
        </g>
      </svg>
    );
  };
  const TempIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          d="M20 0H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 22H4V2h16Z"
        />
        <path
          fill="currentColor"
          d="M6 4h12v2H6zm0 4h7v2H6zm2 12h8l-4-3zm11-1v-6l-5 3zM6 13v6l4-3zm10-1H8l4 3z"
        />
      </svg>
    );
  };

  const ideas = [
    {
      title: "Create a blog post about HeroUI",
      description: "explain it in simple terms",
    },
    {
      title: "Give me 10 ideas for my next blog post",
      description: "include only the best ideas",
    },
    {
      title: "Compare HeroUI with other UI libraries",
      description: "be as objective as possible",
    },
    {
      title: "Write a text message to my friend",
      description: "be polite and friendly",
    },
  ];

  const Preset = [
    {
      label: "Preset 1",
      key: "Preset 1",
    },
    {
      label: "Preset 2",
      key: "Preset 2",
    },
    {
      label: "Preset 3",
      key: "Preset 3",
    },
    { label: "Preset 4", key: "Preset 4" },
    { label: "Preset 5", key: "Preset 5" },
    {
      label: "Preset 6",
      key: "Preset 6",
    },
    {
      label: "Preset 7",
      key: "Preset 7",
    },
    {
      label: "Preset 8",
      key: "Preset 8",
    },
    {
      label: "Preset 9",
      key: "Preset 9",
    },
    {
      label: "Preset 10",
      key: "Preset 10",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 justify-end mt-4 px-10 items-center">
        <Autocomplete className="w-52" size="sm" placeholder="Select a preset">
          {Preset.map((items) => (
            <AutocompleteItem key={items.key}>{items.label}</AutocompleteItem>
          ))}
        </Autocomplete>

        <Button size="sm">Save</Button>
        <Button size="sm">Update</Button>
        <Button color="danger" size="sm" variant="flat">
          Delete
        </Button>
      </div>

      <div>
        <div className="flex justify-between mt-5 px-10 flex-wrap gap-4">
          <h3>Creative Uses for Kids Art</h3>

          <Tabs aria-label="Tabs sizes">
            <Tab key="Creative" title="Creative" />
            <Tab key="Technical" title="Technical" />
            <Tab key="Precise" title="Precise" />
          </Tabs>
        </div>
      </div>

      <Divider className="my-4" />

      <div>
        <ScrollShadow className="w-[900px] h-[500px]">
          <Cards />
        </ScrollShadow>
      </div>

      <ScrollShadow
        hideScrollBar
        className="flex flex-nowrap gap-2 mt-10"
        orientation="horizontal"
      >
        <div className="flex gap-2">
          {ideas.map(({ title, description }, index) => (
            <Button
              key={index}
              className="flex h-14 flex-col items-start gap-0"
              variant="flat"
            >
              <p>{title}</p>
              <p className="text-default-500">{description}</p>
            </Button>
          ))}
        </div>
      </ScrollShadow>

      <div className="flex flex-col bg-black mt-5">
        <div className="w-full  flex flex-col max-w-[240px]">
          <Textarea
            placeholder="Enter a Prompt here"
            variant="flat"
            minRows={5}
            className="w-[900px] mt-10"
            endContent={
              <Button
                isIconOnly
                aria-label="Like"
                size="sm"
                radius="full"
                color="default"
              >
                <UpIcon />
              </Button>
            }
          />

          <div className="flex w-[900px] bg-neutral-800 items-center justify-between overflow-scroll">
            <div className="flex w-full mb-5 gap-1 md:gap-3">
              <Button
                size="sm"
                startContent={
                  <Button
                    isIconOnly
                    aria-label="Like"
                    size="sm"
                    radius="full"
                    color="default"
                  >
                    <AttachIcon />
                  </Button>
                }
                variant="flat"
              >
                Attach
              </Button>
              <Button
                size="sm"
                startContent={
                  <Button
                    isIconOnly
                    aria-label="Like"
                    size="sm"
                    radius="full"
                    color="default"
                  >
                    <VoiceIcon />
                  </Button>
                }
                variant="flat"
              >
                Voice Commands
              </Button>
              <Button
                size="sm"
                startContent={
                  <Button
                    isIconOnly
                    aria-label="Like"
                    size="sm"
                    radius="full"
                    color="default"
                  >
                    <TempIcon />
                  </Button>
                }
                variant="flat"
              >
                Templates
              </Button>
            </div>
            <p className="py-1 text-tiny text-default-400">
              1/2000
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-400">
        Acme AI can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}
