import React, { useEffect, useState } from "react";

export default function CrewMembers({ selectedCrew, onChangeSelectedPerson }) {
	const [data, getData] = useState([]);

	const API = "https://space-crew.herokuapp.com/crewmembers";

	const fetchData = () => {
		fetch(API)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				getData(res);
			});
	};

	useEffect(() => {
		fetchData();
		getData(
			data.map((post) => {
				return {
					select: false,
					id: post.id,
				};
			})
		);
	}, []);

	return (
		<div className="container mt-5">
			<div className="posts  scrollbar scrollbar-success  ">
				{data.map((post, index) => (
					<div
						key={index}
						className="decoration force-overflow overflow-auto m-2	 p-0"
					>
						<div className="d-flex text-center flex-row flex-wrap justify-content-between">
							<div className="crew-name">
								<h4 className="p-3 fw-bold ">{post.Name} </h4>
								<p className="p-1 font-weight-bold">
									Origin
									<br />
									<div className="font-weight-normal"> {post.Origin}</div>
								</p>
							</div>

							<div>
								<p className="p-1 font-weight-bold">
									Leadership <br />
									<div className="font-weight-normal">{post.Leadership}</div>
								</p>
								<p className="p-1 font-weight-bold">
									Mining
									<br /> <div className="font-weight-normal">{post.Mining}</div>
								</p>
							</div>
							<div>
								<p className="p-1 font-weight-bold">
									Farming <br />{" "}
									<div className="font-weight-normal">{post.Farming}</div>
								</p>
								<p className="p-1 font-weight-bold">
									Building
									<br />{" "}
									<div className="font-weight-normal">{post.Building}</div>
								</p>
							</div>
							<div>
								<p className="p-1 font-weight-bold">
									Combat
									<br /> <div className="font-weight-normal">{post.Combat}</div>
								</p>
								<p className="p-1 font-weight-bold">
									Science <br />{" "}
									<div className="font-weight-normal">{post.Science}</div>
								</p>
							</div>
							<p className="p-1 mr-2 font-weight-bold">
								Fertility <br />{" "}
								<div className="font-weight-normal">{post.Fertility}</div>
							</p>
							<p>
								{" "}
								<input
									style={{ backgroundColor: "green" }}
									type="checkbox"
									className="checkMark bg-success"
									checked={selectedCrew.indexOf(post._id) > -1}
									onChange={() =>
										onChangeSelectedPerson(
											post._id,
											post.Name,
											post.Origin,
											post.Leadership,
											post.Mining,
											post.Farming,
											post.Building,
											post.Combat,
											post.Science,
											post.Fertility
										)
									}
								/>
							</p>
						</div>
					</div>
				))}
			</div>
			<br />
		</div>
	);
}
