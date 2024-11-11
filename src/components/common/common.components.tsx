"use client";

import { Alert, AlertColor } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface AlertComponentProps {
	level: AlertColor;
	message: string;
	clearTime?: number;
	resetState?: Dispatch<SetStateAction<string>>; // Replace 'StateType' with the actual type of the state
}

export function AlertComponent({
	level,
	message,
	clearTime,
	resetState,
}: AlertComponentProps) {
	if (clearTime && resetState) {
		setTimeout(() => {
			resetState("");
		}, clearTime);
	}

	return (
		<>
			<Alert severity={level} sx={{ mb: 3 }}>
				{message}
			</Alert>
		</>
	);
}
