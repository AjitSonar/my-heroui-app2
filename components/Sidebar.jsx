"use client";

import { Input } from "@heroui/input";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@heroui/react";
import { Slider } from "@heroui/react";

export default function Sidebar() {
  return (
    <div>
      <h1 className="mt-4 text-lg">Playground</h1>
      <Input
        className="mt-4"
        label="System"
        size="lg"
        placeholder="You are a helpful Acme AI code assistant"
        type="text"
      />

      <Autocomplete
        className="max-w-xs mt-4"
        label="Model"
        placeholder="Search Model"
      >
        <AutocompleteSection showDivider title="Open AI">
          <AutocompleteItem key="gpt-4">gpt-4</AutocompleteItem>
          <AutocompleteItem key="gpt-3.5-turbo">gpt-3.5-turbo</AutocompleteItem>
          <AutocompleteItem key="gpt-3.5-turbo-16k">
            gpt-3.5-turbo-16k
          </AutocompleteItem>
          <AutocompleteItem key="babbage-002">babbage-002</AutocompleteItem>
          <AutocompleteItem key="davinci-002">davinci-002</AutocompleteItem>
          <AutocompleteItem key="Giraffe">Giraffe</AutocompleteItem>
        </AutocompleteSection>
        <AutocompleteSection title="Fine Tunes">
          <AutocompleteItem key="Personal::gpt-3">
            Personal::gpt-3
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k">
            Personal::gpt-3-16k
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k-2">
            Personal::gpt-3-16k-2
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k-3">
            Personal::gpt-3-16k-3
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k-4">
            Personal::gpt-3-16k-4
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k-5">
            Personal::gpt-3-16k-5
          </AutocompleteItem>
          <AutocompleteItem key="Personal::gpt-3-16k-6">
            Personal::gpt-3-16k-6
          </AutocompleteItem>
        </AutocompleteSection>
      </Autocomplete>

      <Slider
        className="max-w-md mt-5"
        defaultValue={0.5}
        label="Temperature"
        maxValue={1}
        minValue={0}
        step={0.01}
        size="sm"
      />

      <Slider
        className="max-w-md mt-5"
        defaultValue={1024}
        label="Max Length"
        maxValue={2000}
        minValue={0}
        step={200}
        size="sm"
      />

      <Slider
        className="max-w-md mt-5"
        defaultValue={0.5}
        label="Top P"
        maxValue={1}
        minValue={0}
        step={0.01}
        size="sm"
      />

      <Slider
        className="max-w-md mt-5"
        defaultValue={0}
        label="Frequency Penalty"
        maxValue={1}
        minValue={0}
        step={0.01}
        size="sm"
      />

      <Slider
        className="max-w-md mt-5"
        defaultValue={0}
        label="Presence Penalty"
        maxValue={1}
        minValue={0}
        step={0.01}
        size="sm"
      />
    </div>
  );
}
