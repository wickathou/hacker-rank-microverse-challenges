class Node
  attr_accessor :value, :next_node
  
  def initialize(value, next_node = nil)
	  @value = value
    @next_node = next_node
  end
end

class LinkedList
  #setup head and tail
  def initialize(head=nil, tail=nil)
    @head = Node.new(head, tail)
    @tail = Node.new(tail)
  end
  
  def add(number)
    value = Node.new(number)
    if @head = nil
      @head = value
      @tail = value
    else
      @tail = value
      
      
  end

  def get(index)
    # your code here
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(1)
