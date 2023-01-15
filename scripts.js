 // for dare button
	var dare_array = ["Compliment the clothing of the first person that you walk by.",
                    
                    "Find someone sitting alone on a park bench or table and ask to sit with them. Ask them how they are doing today and what classes they had today. Continue the conversation from there.",
                  
                    "Sit next to someone you wouldn’t normally sit next to during your next class. Talk to them about how the class is going so far.",
                    
                    "On the first few days of class, talk to the person next to you in every new class you have. It’s always helpful to have friends in your classes.",
                    
                    "Ask to grab dinner or hang out with someone you don’t usually hang with. Perhaps this is someone you only see in class or don’t talk to that often. It never hurts to branch out."];
  
  let d_index = 0;
  
  function dare_func() {
  	if (d_index >= dare_array.length) {
      d_index -= dare_array.length;
    	}
    
    var output = dare_array[d_index];
		document.getElementById("dare").innerHTML = output;
    d_index++;
  	}
  
  // for help finding friends button
  var find_array = ["Be open to finding new people. One of the first steps to finding friends is being confident in yourself to take risks and meet new people.",
                    
                    "Be open to meeting friends of friends. Maybe you’ve found a few friends already and would like to branch out. Most likely, friends of friends would also have similar interests as you.",
                    
                    "Don’t be afraid to put yourself out there! At college, most people are always looking for new friends and are open to talking to you. Always talk to new people, and do not stress if it doesn’t work out.",
                    
                    "Once you’ve found someone with shared interests, one of the best ways to strengthen your bond with them is to ask them to do things with you. For example, if you both like sports and your college has a basketball game coming up, invite them to join you.",
                    
                    "Remember that the negative consequences to your social risks are minimal. In college there’s typically hundreds of students to become friends with. Worst case from taking a risk is not becoming friends with that person, which is okay! Things like that happen, and it’s just part of the process. Remember to just keep taking risks and friends will come your way."];
  
  let f_index = 0;
  
  function find_func() {
  	if (f_index >= find_array.length) {
      f_index -= find_array.length;
    	}
    
    var output = find_array[f_index];
		document.getElementById("find").innerHTML = output;
    f_index++;
  	}
  
  // for activities with friends button
  var activity_array = ["Grab lunch or dinner with your friend at a local restaurant, or simply go to a dining hall.",
                        
                        "Study in the library with a friend. It can greatly help in your classes to have a studybuddy. Even if your friend is in a different class, studying different things at the library is much more fun than studying alone.",
                        
                        "Go to a game with friends. It's always fun to support your school at a game, whether it be basketball, football, soccer, or whatever sport you want. Get dressed in school apparel and show support for your team!",
                        
                        "If you or one of your friends has a car on campus, take a trip to somewhere fun off campus. You could see a movie, or try a new restaurant you have never been to. Leaving campus opens your options up. If no one has a car, just watch a movie in your dorm!",
                        
                        "Have a game night with your friends at your dorm. If anyone has any board or card games it would be a great opportunity to play them and have a fun time with friends."];
  
  let a_index = 0;
  
  function activity_func() {
  	if (a_index >= activity_array.length) {
      a_index -= activity_array.length;
    	}
    
    var output = activity_array[a_index];
		document.getElementById("activity").innerHTML = output;
    a_index++;
  	}
