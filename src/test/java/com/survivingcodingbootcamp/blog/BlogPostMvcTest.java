package com.survivingcodingbootcamp.blog;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@WebMvcTest

public class BlogPostMvcTest {

	@Resource
	MockMvc mvc;

	@Test
	public void shouldRetrieveProducts() throws Exception {
		mvc.perform(get("/products")).andExpect(status().isOk());
	}

}
