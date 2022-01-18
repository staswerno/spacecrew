import React, { useEffect, useState } from "react";

export default function CrewMembers({
	selectedPeople,
	onChangeSelectedPerson,
}) {
	const [data, getData] = useState([]);
<<<<<<< HEAD
	const [selectedPeople, setSelectedPeople] = useState([]);
	const [selectedCrew, setSelectedCrew] = useState([]);
	const [selectedLeadership, setSelectedLeadership] = useState(0);
	const [crewMemberIndex, setCrewMemberIndex] = useState();
=======
>>>>>>> c2835446cc3af796f578ae4b25342348a3b68ace

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

<<<<<<< HEAD
	const onChangeSelectedPerson = (
		id,
		Name,
		Origin,
		Leadership,
		Mining,
		Farming,
		Building,
		Combat,
		Science,
		Fertility
	) => {
		
		const isSelected =
			selectedPeople.indexOf(
				id,
				Name,
				Origin,
				Leadership,
				Mining,
				Farming,
				Building,
				Combat,
				Science,
				Fertility
			) > -1;			

		const newSelectedPeople = isSelected
			? selectedPeople.filter((person) => person != id)
			: [
					...selectedPeople,
					id,
					Name,
					Origin,
					Leadership,
					Mining,
					Farming,
					Building,
					Combat,
					Science,
					Fertility
			  ];

		setSelectedPeople(newSelectedPeople);
		
		

		if (selectedCrew.includes(id)) { 
			
			setCrewMemberIndex(selectedCrew.indexOf(id)); //Takes an old index for some reason
			
			console.log("crewmemberindex" + crewMemberIndex)
			selectedCrew.splice(crewMemberIndex, 1)
			setSelectedLeadership(selectedLeadership - Leadership);
			} else {
			setSelectedCrew([...selectedCrew, id])
			setSelectedLeadership(selectedLeadership + Leadership);

		}
		console.log("the id " + id);
	};

	//console.log(selectedPeople);
	console.log("Leadership:" + selectedLeadership);
	console.log("Selected Crew:" + selectedCrew)
	console.log("crewmemberindex" + crewMemberIndex)
	

=======
>>>>>>> c2835446cc3af796f578ae4b25342348a3b68ace
	return (
		<div className="container mt-5">
			<div className="posts  scrollbar scrollbar-success  ">
				{data.map((post, index) => (
					<div
						key={index}
						className="decoration force-overflow overflow-auto m-3 "
					>
						<div className="d-flex text-center flex-row flex-wrap justify-content-between">
							<div>
								<h4 className="p-3 fw-bold ">{post.Name} </h4>
								<p className="p-1">
									Origin <br /> {post.Origin}{" "}
								</p>
							</div>
							<div>
								<p className="p-1">
									Leadership <br /> {post.Leadership}{" "}
								</p>
								<p className="p-1">
									Mining <br /> {post.Mining}{" "}
								</p>
							</div>
							<div>
								<p className="p-1">
									Farming <br /> {post.Farming}{" "}
								</p>
								<p className="p-1">
									Building <br /> {post.Building}{" "}
								</p>
							</div>
							<div>
								<p className="p-1">
									Combat <br /> {post.Combat}{" "}
								</p>
								<p className="p-1">
									Science <br /> {post.Science}{" "}
								</p>
							</div>
							<p className="p-1">
								Fertility <br /> {post.Fertility}{" "}
							</p>
							<p>
								{" "}
								<input
									style={{ backgroundColor: "green" }}
									type="checkbox"
									className="checkMark bg-success"
									checked={
										selectedPeople.indexOf(
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
										) > -1
									}
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
