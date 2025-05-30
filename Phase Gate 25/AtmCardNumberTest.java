import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AtmCardNumberTest{

	AtmCardNumber quiz = new AtmCardNumber();

	@Test
	public void cardNumberCheckForAtmCards(){

	int[] check = {6,5,6,7,4,6,4,3,3,5,6,5,7,4,6,8};

	String expected = "Mastercard";

	assertEquals(expected, quiz.cardNumberIn(check));
	}
}
