"use client";

import { Alert, AlertColor } from "@mui/material";
import { useState } from "react";

interface AlertComponentProps {
	level: AlertColor;
	message: string;
	clearTime?: number;
}

export function AlertComponent({
	level,
	message,
	clearTime,
}: AlertComponentProps) {
	const [alertMessage, setAlertMessage] = useState(message);

	if (clearTime) {
		setTimeout(() => {
			setAlertMessage("");
		}, clearTime);
	}

	return (
		<>
			{alertMessage !== "" ? (
				<Alert severity={level} sx={{ mb: 3 }}>
					{message}
				</Alert>
			) : (
				<></>
			)}
		</>
	);
}
