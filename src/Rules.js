import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";


function GameRules (){

    const [shows, setShows] = useState(false);
	const handleCloses = () => setShows(false);
	const handleShows = () => setShows(true);

    return(
        <div>
        <Button
					variant="light"
					type="button"
					className="startBtn "
					onClick={handleShows}
				>
					Mission Briefing
				</Button>
        
        <Modal show={shows} onHide={handleCloses} centered>
					<Modal.Header closeButton>
						<Modal.Title>
							<h1>Mission – Briefing </h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="Rules">
                            <div>
                                Greetings Commander! Here are some things to look out for, when you populate other worlds. 
                                First of all: Picking the right crewmembers for the planets is crucial!
                            </div>
                            <h5>This is what their skills are needed for: </h5>
                            <ul className="RulesAttributes">
                                <li><b>Farming:</b> If your colony doesn't have enough food, they will starve! Planets with more plant life need less farming skills.</li>
                                <li><b>Building:</b> If the planet has a climate that's hostile to our species we will need appropriate protection. That's what building is for.</li>
                                <li><b>Combat:</b> Some planets hold alien-life. If it comes to a conflict, we will only survive with enough combat ability.</li>
                                <li><b>Leadership:</b> A bad leadership probably won't kill a colony, but who knows what happens if we don't have it? Leadership also supports the science abilities.</li>
                                <li><b>Science:</b> It is important to keep our technological advancement! Science also supports the colony in case of a combat situation.</li>
                                <li><b>Mining:</b> Resources are crucial to wealth and economy! Mining also supports our building abilities.</li>
                                <li><b>Fertility:</b> It's important that our colonies grow. A growing population also supports the birth of good leaders.</li>
                            </ul>
                            <div>
                                This is all you need to know, commander. Choose wisely!
                            </div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						
							<Button
								variant="primary"
								className="startBtn "
								onClick={handleCloses}
							>
								Yes, sir!
							</Button>
					
					</Modal.Footer>
				</Modal>
            </div>

        
            
    )

}

export default GameRules