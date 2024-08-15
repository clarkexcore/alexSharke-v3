"use client";

import { Alert, AlertColor } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
	const [alertMessage, setAlertMessage] = useState(message);

	if (clearTime) {
		setTimeout(() => {
			setAlertMessage("");

			if (resetState) {
				resetState("");
			}
		}, clearTime);
	}

	useEffect(() => {
		setAlertMessage(message);
	}, [message]);

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
