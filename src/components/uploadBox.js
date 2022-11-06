/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";
import { axiosCall, endpoints, PhotoEditContext } from "../Services/axiosCalls";
import { Skeleton } from "@mui/material";

export default function UploadBox() {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const [loading, setLoading] = useState(false);

	const handleFileChange = (e, type) => {
		const files = e.target.files;
		setLoading(true);

		let data;
		if (type === "url") {
			setUploadData({
				...uploadData,
				image_url: e.target.value,
				image: "",
			});
			data = {
				image_url: e.target.value,
				image: "",
			};
		} else {
			setUploadData({ ...uploadData, image: files[0], image_url: "" });
			data = {
				image: e.target.files[0],
				image_url: "",
			};
		}
		axiosCall(endpoints.upload, data).then(
			(res) => {
				setUploadData({
					...uploadData,
					image_url: res.data.data.url,
					image_id: "",
					image: "",
				});
				setLoading(false);
			},
			(err) => {
				console.log(err);
			}
		);
	};

	return (
		<Stack
			direction="column"
			divider={<Divider orientation="horizontal" flexItem />}
			spacing={2}
			justifyContent="space-around"
			sx={{
				width: "100%",
			}}
		>
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
				sx={{ width: "100%" }}
				justifyContent="space-around"
			>
				<Button variant="text" component="label">
					Upload
					<input
						id="fileUpolad"
						type="file"
						onChange={(e) => handleFileChange(e, "image")}
						multiple
						style={{ visibility: "hidden", position: "absolute" }}
					/>
				</Button>
				<TextField
					id="standard-basic"
					label="Image URL"
					onChange={(e) => handleFileChange(e, "url")}
					variant="standard"
					placeholder={uploadData.image_url}
				/>
			</Stack>
			{/* {(uploadData.image !== null ||
				typeof uploadData.image_url !== "string") && <Preview />} */}

			{loading ? (
				<Skeleton variant="rounded" width="100%" height={400} />
			) : (
				<Preview />
			)}
		</Stack>
	);
}
