package com.survivingcodingbootcamp.blog;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ResourcePopulator implements CommandLineRunner {
	@Resource
	private AuthorRepository authorRepo;
	@Resource
	private BlogPostRepository blogPostRepo;

	@Override
	public void run(String... args) throws Exception {
		
		String newline = System.getProperty("line.separator");

		Author janeSmith = new Author("Jane", "Smith");
		authorRepo.save(janeSmith);
		Author johnnyTables = new Author("Johny", "Tables");
		authorRepo.save(johnnyTables);
		blogPostRepo.save(new BlogPost(
				"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
				janeSmith, "Blah Blah", "Blah"));
		blogPostRepo.save(new BlogPost(
				"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
						+ "\r\n"
						+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
						+ "\r\n"
						+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
						+ "\r\n"
						+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
				johnnyTables, "Sufficient Impossible", "Laughter"));
		blogPostRepo.save(new BlogPost(
				"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
						+ "\r\n"
						+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
				johnnyTables, "Way nor", "Denial"));
		blogPostRepo.save(new BlogPost(
				"I was like this is cool and confusing. \r\n"
				+ "\n \n"  + newline
				+ "And my cats were hungry.", 
				johnnyTables, "My Life Right Meow", "Reality"));
		blogPostRepo.save(new BlogPost(
				"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
				janeSmith, "Filler", "Success"
				));
		blogPostRepo.save(new BlogPost(
				"This laptop is sluggish with this IDE.  Just process already!",
				johnnyTables, "Lametop", "TechTools"
				));
		blogPostRepo.save(new BlogPost(
				"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
				+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
				+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
				newline
				 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
				 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
				 johnnyTables, "Not Kitten Around", "Furballs"
				));
		blogPostRepo.save(new BlogPost(
				"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
				janeSmith, "Blah Blah", "Blah"));
		blogPostRepo.save(new BlogPost(
				"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
						+ "\r\n"
						+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
						+ "\r\n"
						+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
						+ "\r\n"
						+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
				johnnyTables, "Sufficient Impossible", "Laughter"));
		blogPostRepo.save(new BlogPost(
				"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
						+ "\r\n"
						+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
				johnnyTables, "Way nor", "Denial"));
		blogPostRepo.save(new BlogPost(
				"I was like this is cool and confusing. \r\n"
				+ "\n \n"  + newline
				+ "And my cats were hungry.", 
				johnnyTables, "My Life Right Meow", "Reality"));
		blogPostRepo.save(new BlogPost(
				"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
				janeSmith, "Filler", "Success"
				));
		blogPostRepo.save(new BlogPost(
				"This laptop is sluggish with this IDE.  Just process already!",
				johnnyTables, "Lametop", "TechTools"
				));
		blogPostRepo.save(new BlogPost(
				"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
				+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
				+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
				newline
				 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
				 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
				 johnnyTables, "Not Kitten Around", "Furballs"
				));	blogPostRepo.save(new BlogPost(
						"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
						janeSmith, "Blah Blah", "Blah"));
				blogPostRepo.save(new BlogPost(
						"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
								+ "\r\n"
								+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
								+ "\r\n"
								+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
								+ "\r\n"
								+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
						johnnyTables, "Sufficient Impossible", "Laughter"));
				blogPostRepo.save(new BlogPost(
						"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
								+ "\r\n"
								+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
						johnnyTables, "Way nor", "Denial"));
				blogPostRepo.save(new BlogPost(
						"I was like this is cool and confusing. \r\n"
						+ "\n \n"  + newline
						+ "And my cats were hungry.", 
						johnnyTables, "My Life Right Meow", "Reality"));
				blogPostRepo.save(new BlogPost(
						"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
						janeSmith, "Filler", "Success"
						));
				blogPostRepo.save(new BlogPost(
						"This laptop is sluggish with this IDE.  Just process already!",
						johnnyTables, "Lametop", "TechTools"
						));
				blogPostRepo.save(new BlogPost(
						"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
						+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
						+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
						newline
						 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
						 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
						 johnnyTables, "Not Kitten Around", "Furballs"
						));
				blogPostRepo.save(new BlogPost(
						"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
						janeSmith, "Blah Blah", "Blah"));
				blogPostRepo.save(new BlogPost(
						"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
								+ "\r\n"
								+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
								+ "\r\n"
								+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
								+ "\r\n"
								+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
						johnnyTables, "Sufficient Impossible", "Laughter"));
				blogPostRepo.save(new BlogPost(
						"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
								+ "\r\n"
								+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
						johnnyTables, "Way nor", "Denial"));
				blogPostRepo.save(new BlogPost(
						"I was like this is cool and confusing. \r\n"
						+ "\n \n"  + newline
						+ "And my cats were hungry.", 
						johnnyTables, "My Life Right Meow", "Reality"));
				blogPostRepo.save(new BlogPost(
						"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
						janeSmith, "Filler", "Success"
						));
				blogPostRepo.save(new BlogPost(
						"This laptop is sluggish with this IDE.  Just process already!",
						johnnyTables, "Lametop", "TechTools"
						));
				blogPostRepo.save(new BlogPost(
						"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
						+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
						+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
						newline
						 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
						 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
						 johnnyTables, "Not Kitten Around", "Furballs"
						));
				blogPostRepo.save(new BlogPost(
						"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
						janeSmith, "Blah Blah", "Blah"));
				blogPostRepo.save(new BlogPost(
						"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
								+ "\r\n"
								+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
								+ "\r\n"
								+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
								+ "\r\n"
								+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
						johnnyTables, "Sufficient Impossible", "Laughter"));
				blogPostRepo.save(new BlogPost(
						"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
								+ "\r\n"
								+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
						johnnyTables, "Way nor", "Denial"));
				blogPostRepo.save(new BlogPost(
						"I was like this is cool and confusing. \r\n"
						+ "\n \n"  + newline
						+ "And my cats were hungry.", 
						johnnyTables, "My Life Right Meow", "Reality"));
				blogPostRepo.save(new BlogPost(
						"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
						janeSmith, "Filler", "Success"
						));
				blogPostRepo.save(new BlogPost(
						"This laptop is sluggish with this IDE.  Just process already!",
						johnnyTables, "Lametop", "TechTools"
						));
				blogPostRepo.save(new BlogPost(
						"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
						+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
						+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
						newline
						 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
						 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
						 johnnyTables, "Not Kitten Around", "Furballs"
						));
				blogPostRepo.save(new BlogPost(
						"Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... Ipsum Blah Blah Blah... ",
						janeSmith, "Blah Blah", "Blah"));
				blogPostRepo.save(new BlogPost(
						"If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. \r\n"
								+ "\r\n"
								+ "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. \r\n"
								+ "\r\n"
								+ "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. \r\n"
								+ "\r\n"
								+ "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ",
						johnnyTables, "Sufficient Impossible", "Laughter"));
				blogPostRepo.save(new BlogPost(
						"Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. \r\n"
								+ "\r\n"
								+ "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ",
						johnnyTables, "Way nor", "Denial"));
				blogPostRepo.save(new BlogPost(
						"I was like this is cool and confusing. \r\n"
						+ "\n \n"  + newline
						+ "And my cats were hungry.", 
						johnnyTables, "My Life Right Meow", "Reality"));
				blogPostRepo.save(new BlogPost(
						"I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah. I just need some more filler. meow blah meow blah.", 
						janeSmith, "Filler", "Success"
						));
				blogPostRepo.save(new BlogPost(
						"This laptop is sluggish with this IDE.  Just process already!",
						johnnyTables, "Lametop", "TechTools"
						));
				blogPostRepo.save(new BlogPost(
						"Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish. Munch on tasty moths sit in a box for hours, lay on arms while you're using the keyboard toy mouse squeak roll over dead stare with ears cocked trip on catnip proudly present butt to human. Give me attention or face the wrath of my claws scratch at the door then walk away so pee in the shoe, for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! "
						+ "leap into the air in greatest offense!. Sleep in the bathroom sink claws in your leg and stare out the window or cat snacks, or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Pee in the shoe jump off balcony, onto stranger's head for cough hairball, eat toilet paper stares at human while pushing stuff off a table yet spend all night ensuring people don't sleep sleep all day man running from cops stops to pet cats, goes to jail lick butt and make a weird face. Purr when being pet if it smells like fish eat as much as you wish or gnaw the corn cob"
						+ " or making sure that fluff gets into the owner's eyes. I cry and cry and cry unless you pet me, and then maybe i cry just for fun.\n" + 
						newline
						 + "Ccccccccaaaaaaaaaaatttttttssssssssssssssss. Cough spill litter box, scratch at owner, destroy all furniture, especially couch i like cats because they are fat and fluffy yet cough hairball on conveniently placed pants. Eat the rubberband. Grab pompom in mouth and put in water dish when owners are asleep, cry for no apparent reason. Suddenly go on wild-eyed crazy rampage favor packaging over toy. Pounce on unsuspecting person purr while eating eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at."
						 + "the fabric before taking a catnap for put butt in owner's face and refuse to drink water except out of someone's glass allways wanting food scratch. ",
						 johnnyTables, "Not Kitten Around", "Furballs"
						));
				blogPostRepo.save(new BlogPost(
						"testing for time", johnnyTables, "Time Check", "Code Check"));
				blogPostRepo.save(new BlogPost(
						"another test for time", janeSmith, "Timeeee", "Code Check"));
				blogPostRepo.save(new BlogPost(
						"another test for timeeeeee", janeSmith, "Timeeee", "Code Check"));
	}
}
