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
				+ "\r\n"
				+ "And my cats were hungry.", 
				johnnyTables, "My Life Right Meow", "Reality"));
		blogPostRepo.save(new BlogPost(
				"MEEEEEEEEEEEEEEOOOOOOOOoOoOoWWWWWWWWWWWWW MEEEEEEEEEEEEEEOOOOOOOOoOoOoWWWWWWWWWWWWW MEOW MEOW MEEEEEEEEEEEEEEOOOOOOOOoOoOoWWWWWWWWWWWWW  MEOW",
				janeSmith, "Me-OW", "Cats"));
	}

}
