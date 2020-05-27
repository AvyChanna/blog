+++
title = "Mermaid Test"
date = "2020-05-25T09:40:29+05:30"
description = ""
summary = ""
cover = ""
coveralt = ""
tags = []
keywords = []
draft = false
katex= false
mermaid = true
+++

Dual_EC_DRBG State Diagram

{{<mermaid center>}}
stateDiagram-v2
	state "Internal-State = s" as s
	state "Next-State = t" as t
	state "Pseudo-random-number = r" as r
	s --> t: Φ(s⋅P)
	t --> s
	t --> r: Φ(t⋅Q)
	note left of s: Note - Initial state is decided by a "seed" on first iteration
	note right of r: Mermaid JS does not support latex tho
{{</mermaid>}}