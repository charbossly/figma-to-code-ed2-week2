"use client";

import React from "react";

type Props = {};

export default function Button({}: Props) {
  return <button onClick={() => alert("button")}>button</button>;
}
