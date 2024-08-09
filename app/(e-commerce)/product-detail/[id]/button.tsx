"use client";

import React from "react";

type Props = {};

export default function button({}: Props) {
  return <button onClick={() => alert("button")}>button</button>;
}
