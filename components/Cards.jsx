"use client";

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
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";

export default function Cards() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex items-center">
          <Avatar
            size="md"
            src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png"
          />
          <Card className="m-5">
            <CardBody>
              <div>
                <p>
                  What are 5 creative things I could do with my kids' art? I
                  don't want to throw them away, but it's also so much clutter.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex items-center">
          <Avatar
            size="md"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
          />
          <Card className="m-5">
            <CardBody>
              <div className="w-[770px]">
                <p>
                  Certainly! Here's a summary of five creative ways to use your
                  kids' art: Create Art Books: Turn scanned artwork into custom
                  photo books. Set Up a Gallery Wall: Use a dedicated wall with
                  interchangeable frames for displaying art. Make Functional
                  Items: Print designs on items like pillows, bags, or mugs.
                  Implement an Art Rotation System: Regularly change the
                  displayed art, archiving the older pieces. Use as Gift Wrap:
                  Repurpose art as unique wrapping paper for presents.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="m-5">
          <CardBody className="w-[300px]">
            <p>Was this response better or worse?</p>
          </CardBody>
        </Card>
        <div className="flex items-center">
          <Avatar
            size="md"
            src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png"
          />
          <Card className="m-5">
            <CardBody>
              <div className="w-[770px]">
                <p>I didn't like the suggestions. Can you give me some more?</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex items-center">
          <Avatar
            size="md"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
          />
          <Card className="m-5">
            <CardBody>
              <div className="w-[770px]">
                <p>
                  Of course! Here are five more creative suggestions for what to
                  do with your children's art: Create a Digital Archive: Scan or
                  take photos of the artwork and save it in a digital cloud
                  storage service for easy access and space-saving. Custom
                  Calendar: Design a custom calendar with each month showcasing
                  a different piece of your child's art. Storybook Creation:
                  Compile the artwork into a storybook, possibly with a
                  narrative created by your child, to make a personalized book.
                  Puzzle Making: Convert their artwork into a jigsaw puzzle for
                  a fun and unique pastime activity. Home Decor Items: Use the
                  artwork to create home decor items like coasters, magnets, or
                  lampshades to decorate your house.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
